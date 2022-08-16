import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useDeleteContactMutation, useFetchContactsQuery } from 'redux/apiSlice';

const ContactList = () => {
  const { data = [] } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation()
  const { filter } = useSelector(state => getFilter(state));
  console.log(data);

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(contacts => {
      console.log(contacts);
     return contacts.name.toLowerCase().includes(normalizedFilter)
   } );
  };
  

  return (
    <div className={styles.contactItem}>
      {getFilterContacts().map(({ id, number, name }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              className={styles.button}
              onClick={() => (deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
