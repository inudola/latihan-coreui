import { CButton, CCard, CCardBody, CCardHeader, CCol, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CImage, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewPage = () => {
    const [data, setData] = useState([])
    const [dataDetail, setDataDetail] = useState({})
    const [show, setShow] = useState(false)


    const getData = () => {
        axios.get('https://dummyjson.com/products')
            .then(({ data }) => {
                setData(data.products)
            })
            .catch((e) => alert(e))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <CModal size='lg' visible={show} onClose={() => setShow(false)}>
                <CModalHeader onClose={() => setShow(false)}>
                    <CModalTitle>{dataDetail.brand}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    
                    <CRow>
                        <CCol>
                        <CImage rounded thumbnail src={dataDetail.thumbnail} width={300} height={300} />
                        </CCol>
                        <CCol>
                            <div>Price: ${dataDetail.price}</div>
                            <div>Rating: {dataDetail.rating}</div>
                            <div>Brand: {dataDetail.title}</div>
                            <div>Description: {dataDetail.description}</div>
                        </CCol>
                    </CRow>
                    </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setShow(false)}>
                        Close
                    </CButton>
                    <CButton color="primary">Buy</CButton>
                </CModalFooter>

            </CModal>
            <CCard className="mb-4">
                <CCardHeader>
                    <strong>Product</strong> <small>Example</small>
                </CCardHeader>
                <CCardBody>
                    <CTable>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Brand</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {
                                data.map((el, index) => {
                                    return (
                                        <CTableRow key={index}>
                                            <CTableHeaderCell scope="row">{el.id}</CTableHeaderCell>
                                            <CTableDataCell>{el.brand}</CTableDataCell>
                                            <CTableDataCell>{el.title}</CTableDataCell>
                                            <CTableDataCell>{el.category}</CTableDataCell>
                                            <CTableDataCell>
                                                <CDropdown>
                                                    <CDropdownToggle color="secondary" variant="ghost">Action</CDropdownToggle>
                                                    <CDropdownMenu>
                                                        <CDropdownItem onClick={() => {
                                                            console.log(el)
                                                            setDataDetail(el)
                                                            setShow(true)
                                                        }}>View</CDropdownItem>
                                                        <CDropdownItem onClick={() => console.log(el.id)}>Edit</CDropdownItem>
                                                        <CDropdownItem onClick={() => console.log(el.id)}>Delete</CDropdownItem>
                                                    </CDropdownMenu>
                                                </CDropdown>
                                            </CTableDataCell>
                                        </CTableRow>
                                    )
                                })
                            }
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
    )
}

export default NewPage