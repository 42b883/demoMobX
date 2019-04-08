import { action, observable, decorate } from "mobx";
import axios from "axios";

class ContactsStore {
  contacts = [];
  search = "";
  fav = [];

  loadContacts = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setContacts(res);
    });
  };

  setContacts = res => {
    this.contacts = res.data.slice(0, 5);
  };

  handleSearch = e => {
    this.search = e.target.value;
  };

  handleSort = () => {
    const newArr = [...this.contacts];
    newArr.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });

    this.contacts = newArr;
  };

  addToFav = contact => {
    const fav = [...this.fav, contact];
    this.fav = fav;
  };

  deleteFav = id => {
    const favRemove = this.contacts.filter(item => {
      return item.id !== id;
    });
    this.contacts = favRemove;
  };
}

decorate(ContactsStore, {
  contacts: observable,
  search: observable,
  fav: observable,
  deleteFav: action,
  addToFav: action,
  handleSort: action,
  handleSearch: action,
  setContacts: action
});

export default new ContactsStore();
