import * as Contacts from "expo-contacts";

const { data } = await Contacts.getContactsAsync({
    fields: [Contacts.PHONE_NUMBERS],
});