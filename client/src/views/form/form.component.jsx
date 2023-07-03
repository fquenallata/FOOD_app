import { useState } from "react";
import styles from "./Form.module.css";
import { useDispatch } from "react-redux";
import { postRecipe } from "../../redux/actions/actions.js";
import { useNavigate } from "react-router-dom";

const regexHealthScore = /^(?:[1-9][0-9]?|100)$/;
const regexTitle = /^[a-zA-Z0-9\s\-.,!?()']+$/;

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    title: "",
    image: "",
    summary: "",
    healthScore: 0,
    instructions: "",
    diets: [],
  });

  const [error, setError] = useState({
    title: "Please, enter the title",
    image: "Please, enter the image",
    summary: "Please, enter the summary",
    healthScore: "The Health Score is 1-100",
    instructions: "Please, enter the recipe instructions",
    diets: "Please, select at least one option",
  });

  const validate = (input) => {
    const { title, image, summary, healthScore, instructions, diets } = input;
    let updatedError = { ...error };

    if (!title) {
      updatedError.title = "Title cannot be null";
    } else {
      updatedError.title = "";
      if (!regexTitle.test(title)) {
        updatedError.title = "Invalid format";
      }
    }

    if (!image) {
      updatedError.image = "Image cannot be null";
    } else {
      updatedError.image = "";
    }

    if (!summary) {
      updatedError.summary = "Summary cannot be null";
    } else {
      updatedError.summary = "";
    }

    if (!regexHealthScore.test(healthScore)) {
      updatedError.healthScore = "Invalid format";
    } else {
      updatedError.healthScore = "";
    }

    if (!instructions) {
      updatedError.instructions = "instructions cannot be null";
    } else {
      updatedError.instructions = "";
    }

    if (diets.length > 0) {
      updatedError.diets = "At last option";
    } else {
      updatedError.diets = "";
    }

    setError(updatedError);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedDiets = [...input.diets];

      if (checked) {
        updatedDiets.push(Number(name));
      } else {
        updatedDiets = updatedDiets.filter((type) => type !== Number(name));
      }

      setInput({
        ...input,
        diets: updatedDiets,
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }

    validate({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(input);

    const hasErrors = Object.values(error).some((error) => error !== "");

    if (!hasErrors) {
      dispatch(postRecipe(input));
      navigate("/home");
      window.alert("Posted successfully");
    } else {
      window.alert("Insufficient data or no data");
    }
  };

  const handleHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  console.log(input);

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.postContainer}>
        {/* title */}
        <div className={styles.titleContainer}>
          <label>Title:</label>
          <input
            name="title"
            value={input.value}
            onChange={handleChange}
            className={styles.textInputs}
          />
          <span>{error.title}</span>
        </div>
        {/* image */}
        <div className={styles.imageContainer}>
          <label>Image:</label>
          <input
            name="image"
            value={input.value}
            onChange={handleChange}
            className={styles.textInputs}
          />
          <span>{error.image}</span>
        </div>
        {/* summary */}
        <div className={styles.summaryContainer}>
          <label>Summary:</label>
          <textarea
            id=""
            cols="20"
            rows="5"
            type="textArea"
            name="summary"
            value={input.value}
            onChange={handleChange}
            className={styles.textInputs}
          ></textarea>
          <span>{error.summary}</span>
        </div>
        {/* healthScore */}
        <div className={styles.healthScoreContainer}>
          <label>Health Score:</label>

          <input
            name="healthScore"
            value={input.value}
            onChange={handleChange}
            className={styles.textInputs}
          />
          <span>{error.healthScore}</span>
        </div>
        {/* instructions */}
        <div className={styles.instructionsContainer}>
          <label>Instructions:</label>
          <textarea
            id=""
            cols="20"
            rows="5"
            type="textArea"
            name="instructions"
            value={input.value}
            onChange={handleChange}
            className={styles.textInputs}
          ></textarea>
          <span>{error.instructions}</span>
        </div>
        {/* tipos de dieta */}
        <div className={styles.dietsContainer}>
          <label>Types of diet</label>
          <div className={styles.checkboxsContainer}>
            <label style={{ fontSize: "0.8rem" }}>gluten free</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="1"
              checked={input.diets.includes(1)}
              onChange={handleChange}
            />
            <label style={{ fontSize: "0.8rem" }}>lacto ovo vegetarian</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="2"
              checked={input.diets.includes(2)}
              onChange={handleChange}
            />
            <label style={{ fontSize: "0.8rem" }}>dairy free</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="3"
              checked={input.diets.includes(3)}
              onChange={handleChange}
            />
            <label style={{ fontSize: "0.8rem" }}>pescatarian</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="4"
              checked={input.diets.includes(4)}
              onChange={handleChange}
            />
            <label style={{ fontSize: "0.8rem" }}>vegan</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="5"
              checked={input.diets.includes(5)}
              onChange={handleChange}
            />
            <label style={{ fontSize: "0.8rem" }}>whole 30</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="6"
              checked={input.diets.includes(6)}
              onChange={handleChange}
            />
            <label style={{ fontSize: "0.8rem" }}>paleolithic</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="7"
              checked={input.diets.includes(7)}
              onChange={handleChange}
            />
            <label style={{ fontSize: "0.8rem" }}>primal</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="8"
              checked={input.diets.includes(8)}
              onChange={handleChange}
            />
            <label style={{ fontSize: "0.8rem" }}>fodmap friendly</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="9"
              checked={input.diets.includes(9)}
              onChange={handleChange}
            />
            <label style={{ fontSize: "0.8rem" }}>ketogenic</label>
            <input
              style={{ height: "12px" }}
              type="checkbox"
              name="10"
              checked={input.diets.includes(10)}
              onChange={handleChange}
            />
          </div>
          <span>{error.diets}</span>
        </div>
        <div className={styles.buttonsContainer}>
          <input
            type="button"
            value="Home"
            style={{ width: "60px" }}
            onClick={handleHome}
          />
          <button type="submit" style={{ width: "60px" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
