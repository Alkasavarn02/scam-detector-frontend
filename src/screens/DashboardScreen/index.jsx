import React, { memo, useEffect, useState } from "react";
import styles from "./dashboard.module.css"
import { getAllData } from "../../services/auth";
const CustomHeader = React.lazy(() => import("../../component/customHeader"));
const NavBar = React.lazy(() => import("../../component/SideBarComponent"));

const DashboardScreen = ({screen}) => {

    const [filter, setFilter] = useState("All")
    const [currentPage, setCurrentPage] = useState(1); 
    const [sortOrder, setSortOrder] = useState("asc");

    const recordsPerPage = 10;

    const [alldata,setAllData] = useState({
        data: [],
    })

    useEffect(()=>{
        getAllData()
        .then((res)=>{
            setAllData({
                data: res?.data?.data,
            })
        })
    },[])

    const filteredData = (filter === "All")
        ? alldata?.data 
        : alldata?.data.filter((item) => item.type === filter);

    const totalPages = Math.ceil(filteredData?.length / recordsPerPage);
    const startIndex = (currentPage - 1) * recordsPerPage;

    const currentRecords = filteredData?.slice(startIndex, startIndex + recordsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleSort = ()=>{
        const sortedData = [...alldata.data].sort((a,b)=>{
            if(sortOrder === "asc"){
                return a.reports - b.reports
            } else{
                return b.reports - a.reports
            }
        })

        setAllData({data:sortedData})
        setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    }

    return (
        <div className={`d-flex flex-column ${styles['dashboard-screen']}`}>

            <CustomHeader
                title="Scam Detection Dashboard"
                classes={`${styles['header']}`}
            />
            <div className={`d-flex flex-column ${styles['main-section']}`}>
                <NavBar classes={`${styles['sidebar']}`}/>
                
                <div className={`d-flex flex-column justify-center align-center ${styles['render-screen']}`}>
                    {
                        screen && screen === "scam-list"
                        ? (
                            <>
                                <div className={styles['dropdown-section']}>
                                    <label htmlFor="filterDropdown">Filter by Type: </label>
                                    <select
                                        className={`${styles['filter-dropdown']}`}
                                        id="filterDropdown"
                                        value={filter}
                                        onChange={(e) => {
                                            setFilter(e.target.value);
                                            setCurrentPage(1); 
                                        }}
                                    >
                                        <option value="All">All</option>
                                        <option value="Phone">Phone</option>
                                        <option value="Email">Email</option>
                                    </select>
                                </div>

                                <table className={`${styles['table-section']}`}>
                                    <thead>
                                        <tr>
                                            <th>Scam Type</th>
                                            <th>Value</th>
                                            <th onClick={handleSort} className="cursor-pointer">
                                                Reports
                                                <span className={`${styles['arrow-section']}`}>
                                                    {sortOrder === "asc" ? "↑" : "↓"}
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            currentRecords.length > 0 ? (
                                                currentRecords.map((eachData) => (
                                                    <tr key={eachData?.id}>
                                                        <td>{eachData?.type}</td>
                                                        <td>{eachData?.value}</td>
                                                        <td>{eachData?.reports}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="3" className="text-center">No Data Available</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>

                                <div className={`d-flex justify-center align-center ${styles.pagination}`}>
                                    <button 
                                        onClick={() => handlePageChange(currentPage - 1)} 
                                        disabled={currentPage === 1}
                                        className="cursor-pointer"
                                    >
                                        Previous
                                    </button>
                                        {
                                            [...Array(totalPages)].map((_, index) => (
                                                <button 
                                                    key={index} 
                                                    className={`cursor-pointer ${currentPage === index + 1 ? styles.active : ""}`}
                                                    onClick={() => handlePageChange(index + 1)}
                                                >
                                                    {index + 1}
                                                </button>
                                            ))
                                        }
                                    <button 
                                        onClick={() => handlePageChange(currentPage + 1)} 
                                        disabled={currentPage === totalPages}
                                        className="cursor-pointer"
                                    >
                                        Next
                                    </button>
                                </div>
                            </>
                        ):
                        <>
                            <p className={styles['welcome-text']}>Welcome to the Scam Detection Dashboard! 👋.</p>
                            <p>This application helps users check scam status, report scams, and manage scam reports </p>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default memo(DashboardScreen);