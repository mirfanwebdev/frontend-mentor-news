export function Headlines() {
    return (
        <section className="flex flex-col border">
            <div>headline-image</div>
                <div className="flex justify-between">
                    <h1>headline-title</h1>
                    <div className="flex flex-col">
                        <p>headline-description</p>
                        <button>read-more</button>
                </div>
            </div>
        </section>
    );
}