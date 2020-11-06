import React from 'react'
import Modal from 'components/Modal/Modal'
import TorrentList from '../TorrentList/TorrentList'

const ModalDownloadMovie = ({
  list,
  ...props
}) => {
  const handleDownloadOnClick = torrent => () => {
    // todo: dispatch action for downloading torrent
  }

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
          downloadHandler={handleDownloadOnClick}
        />
      )}
    />
  )
}

export default ModalDownloadMovie
