import Note from 'components/Note'
import NoteModal from 'components/modals/NoteModal'
import DueNote from 'components/DueNote'
import DueNoteModal from 'components/modals/DueNoteModal'
import { Note as NoteType, DueNote as DueNoteType } from 'apollo/queries'

interface NoteTypeConfig {
  name: string
  dataSource: 'notes' | 'due_notes'
  modalComponent: React.FC
  backgroundColor: string
}

interface NoteConfig extends NoteTypeConfig {
  displayComponent: React.FC<NoteType>
}

interface DueNoteConfig extends NoteTypeConfig {
  displayComponent: React.FC<DueNoteType>
}

interface AppConfig {
  note: NoteConfig
  dueNote: DueNoteConfig
}

const appConfig: AppConfig = {
  note: {
    name: 'note',
    dataSource: 'notes',
    displayComponent: Note,
    modalComponent: NoteModal,
    backgroundColor: '#ff9681',
  },
  dueNote: {
    name: 'due note',
    dataSource: 'due_notes',
    displayComponent: DueNote,
    modalComponent: DueNoteModal,
    backgroundColor: '#abe1fd',
  },
}

export default appConfig
