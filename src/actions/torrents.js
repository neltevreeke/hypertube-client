// import * as torrentsApi from 'api/torrent'
import * as ActionTypes from 'constants/ActionType'

export const downloadTorrent = torrent => async dispatch => {
  dispatch({
    type: ActionTypes.DOWNLOAD_TORRENT_START
  })

  try {
    // setup socket server???

    // await torrentsApi.postTorrent(torrent)

  } catch (e) {
    dispatch({
      type: ActionTypes.DOWNLOAD_TORRENT_ERROR,
      payload: e
    })
  }
}
