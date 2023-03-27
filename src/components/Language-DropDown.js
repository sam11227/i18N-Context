const LanguageOptions = (props) => {
  return (
    <div>
      <select onChange={props.onChange}>
        <option>Select Language</option>
        <option value={"en"}>English</option>
        <option value={"ko"}>Korean</option>
        <option value={"chi"}>Chinese</option>
      </select>
    </div>
  );
};
export default LanguageOptions;
