function Notification({ success, error, handleClear }) {
    if (success) {
        return (
            <div className="notification-success">{success}
                <button onClick={handleClear} className="clear">x</button>
            </div>
        );
        
    }
    if (error) {
        return (
            <div className="notification-error">{error}
                <button onClick={handleClear} className="clear">x</button>
            </div>
        )
    }
    return null;
}

export default Notification;