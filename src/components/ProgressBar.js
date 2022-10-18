import ProgressBar from "react-bootstrap/ProgressBar";

function ScreenreaderLabelExample() {
  const now = 55;
  return (
    <div id="ReviewStars">
      <ProgressBar now={now}>
        <div className="stars">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>
      </ProgressBar>
    </div>
  );
}

export default ScreenreaderLabelExample;
