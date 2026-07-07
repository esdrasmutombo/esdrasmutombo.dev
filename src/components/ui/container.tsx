export default function Container({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
            {children}
        </div>
    );
}