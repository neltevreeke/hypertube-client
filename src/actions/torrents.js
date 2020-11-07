import * as torrentsApi from 'api/torrent'
import * as ActionTypes from 'constants/ActionType'

export const downloadTorrent = torrent => async dispatch => {
  dispatch({
    type: ActionTypes.DOWNLOAD_TORRENT_START
  })

  try {
    // eslint-disable-next-line no-console
    console.log(torrent)

    await torrentsApi.getTorrentStream(torrent.hash)

    // todo: setup socket server???

    // on success stream movie

    dispatch({
      type: ActionTypes.DOWNLOAD_TORRENT_SUCCESS
    })
  } catch (e) {
    dispatch({
      type: ActionTypes.DOWNLOAD_TORRENT_ERROR,
      payload: e
    })
  }
}
