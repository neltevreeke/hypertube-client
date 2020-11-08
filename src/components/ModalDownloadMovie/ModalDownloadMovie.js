import React from 'react'
import Modal from 'components/Modal/Modal'
import TorrentList from '../TorrentList/TorrentList'
import { useDispatch } from 'react-redux'
import { downloadTorrent } from 'actions/torrents'

const ModalDownloadMovie = ({
  list,
  movieId,
  ...props
}) => {
  const dispatch = useDispatch()

  const handleDownloadOnClick = torrent => () => {
    torrent.id = movieId

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
