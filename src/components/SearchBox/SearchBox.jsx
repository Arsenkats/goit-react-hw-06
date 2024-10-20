import css from "./SearchBox.module.css";

const SearchBox = ({ searchValue, handleSearch }) => {
  return (
    <div className={css.container}>
      <label className={css.label}>
        <p>Search contacts by name</p>
        <input
          type='text'
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          className={css.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
