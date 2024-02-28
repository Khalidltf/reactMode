import "./toggle.scss";

const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="dark_mode">
      <input
        id="darkmode-toggle"
        className="dark_mode_input"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />

      <label className="dark_mode_label" htmlFor="darkmode-toggle"></label>
    </div>
  );
};

export default Toggle;
