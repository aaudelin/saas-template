export default function Home() {
    return (
        <div className="flex flex-col gap-5">
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <input type="checkbox" className="toggle toggle-accent" defaultChecked/>

                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-1">
                <button className="btn btn-primary">Click me !</button>
                <button className="btn btn-primary btn-outline">Click me !</button>
                <button className="btn btn-secondary">Click me !</button>
                <button className="btn btn-accent">Click me !</button>
                <button className="btn btn-ghost">Click me !</button>
                <button className="btn btn-link">Click me !</button>
            </div>
            <div className="flex flex-row gap-1">
                <div className="badge">default</div>
                <div className="badge badge-neutral">neutral</div>
                <div className="badge badge-primary">primary</div>
                <div className="badge badge-secondary">secondary</div>
                <div className="badge badge-accent">accent</div>
                <div className="badge badge-ghost">ghost</div>
            </div>

            <div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked/>
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2"/>
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2"/>
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>

            <div>
                <input type="range" defaultValue={50} min={0} max="100" className="range range-primary"/>
                <input type="range" defaultValue={40} min={0} max="100" className="range range-secondary"/>
            </div>

            <div>
                <details className="dropdown">
                    <summary className="btn m-1">open or close</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>
        </div>
    )
}
