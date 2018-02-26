import { RootState } from 'config/rootReducer'

// Determines in the user has a dropbox access token
export const isDropboxAuthed = (state: RootState): Boolean => state.dropbox.accessToken !== ''
