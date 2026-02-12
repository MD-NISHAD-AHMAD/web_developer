export const Button = ({ value }) => {
    return (
        <>
            <button 
              className="custom-btn"
              style={value.style}
            >
              {value.name}
            </button>
        </>
    );
};
