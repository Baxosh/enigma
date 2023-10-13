import React, { Fragment, useState } from 'react'
import Table from './Table'
import { useLoad } from '../../hooks/request'

export default function TableForArchive({ columns, columnsForArchive, loading, renderItem, url, params }) {
    const [page, setPage] = useState(1)
    const [archivePage, setArchivePage] = useState(1)
    const dataList = useLoad({ url, params: { ...params, page } }, [params, page])
    const dataListArchive = useLoad({ url, params: { ...params, isArchive: true, page: archivePage } }, [archivePage])

    return (
        <Fragment>
            <hr className="mt-0 has-background-black" />

            <Table
                loading={loading}
                activePage={page}
                onPageChange={setPage}
                items={dataList.response ? dataList.response.results : []}
                columns={columns}
                renderItem={renderItem} />

            <div className="columns mt-3 ml-1 is-justify-content-space-between">
                <div className="column p-0 pt-3">
                    <h3 className="title is-3 has-text-weight-normal">Архивы</h3>
                </div>
            </div>

            <hr className="mt-2 has-background-black" />

            <Table
                loading={loading}
                activePage={archivePage}
                onPageChange={setArchivePage}
                items={dataListArchive.response ? dataListArchive.response.results : []}
                columns={columnsForArchive}
                renderItem={renderItem} />
        </Fragment>
    )
}
