import Harp from "~/components/Harp";

function HarpsList({ harps }) {
    return (
        <>
            <h2 className="heading">Our collection</h2>

            {harps.length && (
                <div className="harps-grid">
                    {harps.map(harp => (
                        <Harp key={harp.id} harp={harp.attributes} />
                    )
                    )}
                </div>
            )}
        </>
    )
}

export default HarpsList