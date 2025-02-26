export type AppProps = {
    productId: any;
}

export default function AppComponent(props: AppProps) {
    return (
        <div className="container p-6 border bg-light">
            <div className="row gx-2">
                <div className="col">
                    <div className="p-3">
                        <img src="https://picsum.photos/200/300" className="card-img-top" />
                    </div>
                </div>
                <div className="col">
                    <div className="p-3">
                        <h2>Product {props.productId}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
      );
}