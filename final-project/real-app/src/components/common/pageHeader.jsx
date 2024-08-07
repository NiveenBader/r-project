function PageHeader({ title, description }) {
  return (
    <div className="row  mg-4">
      <div className="col">
        <h1>{title}</h1>
        {description && <div className="col">{description}</div>}
      </div>
    </div>
  );
}

export default PageHeader;
