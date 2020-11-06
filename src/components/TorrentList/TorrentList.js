import React from 'react'
import styles from './TorrentList.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TorrentList = ({
  list,
  downloadHandler
}) => {
  return (
    <div className={styles.component}>
      <div className={styles.sectionTitle}>
        <p>Quality</p>
        <p>Size</p>
        <p>Seeds</p>
        <p>Download</p>
      </div>
      {list && list.map((torrent, index) => {
        return (
          <div
            className={styles.torrent}
            key={index}
          >
            <p>{torrent.quality}</p>
            <p>{torrent.size}</p>
            <p>{torrent.seeds}</p>
            <FontAwesomeIcon
              className={styles.icon}
              icon='download'
              onClick={downloadHandler(torrent)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default TorrentList
