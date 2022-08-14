import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';
import { useSelector } from 'react-redux';
import { getFilter, getItems } from 'redux/selectors';

const ContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getFilterContacts();

  return (
    <div className={styles.contactItem}>
      {filterContacts.map(({ id, number, name }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              className={styles.button}
              onClick={() => dispatch(deleteContact(id))}
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
