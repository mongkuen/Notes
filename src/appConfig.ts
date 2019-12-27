import Note from 'components/Note'
import NoteModal, { NoteModalProps } from 'components/NoteModal'
import DueNote from 'components/DueNote'
import DueNoteModal, { DueNoteModalProps } from 'components/DueNoteModal'
import { Note as NoteType, DueNote as DueNoteType } from 'queries'

interface NoteTypeConfig {
  name: string
  dataSource: 'notes' | 'due_notes'
}

interface NoteConfig extends NoteTypeConfig {
  displayComponent: React.FC<NoteType>
  modalComponent: React.FC<NoteModalProps>
}

interface DueNoteConfig extends NoteTypeConfig {
  displayComponent: React.FC<DueNoteType>
  modalComponent: React.FC<DueNoteModalProps>
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
  },
  dueNote: {
    name: 'due note',
    dataSource: 'due_notes',
    displayComponent: DueNote,
    modalComponent: DueNoteModal,
  },
}

export default appConfig
