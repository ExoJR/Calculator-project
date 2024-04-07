function Volume() {
  return (
    <div id="box-volume">
      <div className="box-btn-input-volume">
        <button className="btn-volume"></button>
      </div>
      <div className="box-btn-input-volume">
        <input className="input-volume" type="range" />
      </div>
    </div>
  );
}

export default Volume;
