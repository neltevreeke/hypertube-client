import React from 'react'
import Modal from 'components/Modal/Modal'
import TorrentList from '../TorrentList/TorrentList'
import { useDispatch } from 'react-redux'
import { downloadTorrent } from 'actions/torrents'

const ModalDownloadMovie = ({
  list,
  ...props
}) => {
  const dispatch = useDispatch()

  const handleDownloadOnClick = torrent => () => {
    // todo: dispatch action for downloading torrent

    dispatch(downloadTorrent(torrent))
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
