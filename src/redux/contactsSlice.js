import { createSlice } from "@reduxjs/toolkit";
import { initialStateContacts } from "./constants";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const handelPending = (state) => state.loading = true;
const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialStateContacts,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handelPending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handelPending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items.push(action.payload)
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handelPending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const index = state.items.findIndex(contact => contact.id === action.payload.id);
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, handleRejected)
    }
})


export const contactsReducer = contactsSlice.reducer;