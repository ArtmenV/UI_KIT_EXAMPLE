/* eslint-disable global-require */
const ICONS = {
    action: require('./icons/action.svg') as string,
    'add-filled': require('./icons/add-filled.svg') as string,
    add: require('./icons/add.svg') as string,
    'arrow-down': require('./icons/arrow-down.svg') as string,
    'arrow-up': require('./icons/arrow-up.svg') as string,
    'back-arrow': require('./icons/back-arrow.svg') as string,
    'ballot-check': require('./icons/ballot-check.svg') as string,
    barcode: require('./icons/barcode.svg') as string,
    book: require('./icons/book.svg') as string,
    call: require('./icons/call.svg') as string,
    'comments-alt': require('./icons/comments-alt.svg') as string,
    database: require('./icons/database.svg') as string,
    'delete-filled': require('./icons/delete-filled.svg') as string,
    delete: require('./icons/delete.svg') as string,
    disconnect: require('./icons/disconnect.svg') as string,
    'dollar-sign': require('./icons/dollar-sign.svg') as string,
    'double-right': require('./icons/double-right.svg') as string,
    download: require('./icons/download.svg') as string,
    'edit-filled': require('./icons/edit-filled.svg') as string,
    edit: require('./icons/edit.svg') as string,
    ellipses: require('./icons/ellipses.svg') as string,
    eye: require('./icons/eye.svg') as string,
    'file-dollar': require('./icons/file-dollar.svg') as string,
    'file-text': require('./icons/file-text.svg') as string,
    file: require('./icons/file.svg') as string,
    fork: require('./icons/fork.svg') as string,
    gear: require('./icons/gear.svg') as string,
    history: require('./icons/history.svg') as string,
    'home-alt': require('./icons/home-alt.svg') as string,
    hospital: require('./icons/hospital.svg') as string,
    inbox: require('./icons/inbox.svg') as string,
    lens: require('./icons/lens.svg') as string,
    message: require('./icons/message.svg') as string,
    'money-bill': require('./icons/money-bill.svg') as string,
    next: require('./icons/next.svg') as string,
    pen: require('./icons/pen.svg') as string,
    plus: require('./icons/plus.svg') as string,
    print: require('./icons/print.svg') as string,
    question: require('./icons/question.svg') as string,
    remove: require('./icons/remove.svg') as string,
    save: require('./icons/save.svg') as string,
    shopping: require('./icons/shopping.svg') as string,
    sliders: require('./icons/sliders.svg') as string,
    sync: require('./icons/sync.svg') as string,
    tag: require('./icons/tag.svg') as string,
    team: require('./icons/team.svg') as string,
    'thrash-can': require('./icons/thrash-can.svg') as string,
    'user-edit': require('./icons/user-edit.svg') as string,
    'user-plus': require('./icons/user-plus.svg') as string,
    wallet: require('./icons/wallet.svg') as string,
    warehouse: require('./icons/warehouse.svg') as string,
};
/* eslint-enable global-require */

export type TIconName =
    'action' | 'add-filled' | 'add' | 'arrow-down' | 'arrow-up'
    | 'back-arrow' | 'ballot-check' | 'barcode' | 'book' | 'call'
    | 'comments-alt' | 'database' | 'delete-filled' | 'delete' | 'disconnect'
    | 'dollar-sign' | 'double-right' | 'download' | 'edit-filled' | 'edit'
    | 'ellipses' | 'eye' | 'file-dollar' | 'file-text' | 'file'
    | 'fork' | 'gear' | 'history' | 'home-alt' | 'hospital'
    | 'inbox' | 'lens' | 'message' | 'money-bill' | 'next'
    | 'pen' | 'plus' | 'print' | 'question' | 'remove'
    | 'save' | 'shopping' | 'sliders' | 'sync' | 'tag'
    | 'team' | 'thrash-can' | 'user-edit' | 'user-plus' | 'wallet'
    | 'warehouse';

export default ICONS;
