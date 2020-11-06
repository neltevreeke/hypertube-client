import React from 'react'
import Modal from 'components/Modal/Modal'
import TorrentList from '../TorrentList/TorrentList'

const ModalDownloadMovie = ({
  list,
  ...props
}) => {
  return (
    <Modal
      {...props}
      header={(
        <span>
          download
        </span>
      )}
      body={(
        <TorrentList
          list={list}
        />
      )}
    />
  )
}

export default ModalDownloadMovie
