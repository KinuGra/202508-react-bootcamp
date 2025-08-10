export default function AboutMe() {
    return (
        <>
            <h1>About me</h1>
            <p>私はたこ焼きが好きです。</p>
            <p className="text-red-200">
                {[...new Array(10)].map((_, i) => (
                    <p>{i}</p>
                ))}
            </p>
        </>
    )
}