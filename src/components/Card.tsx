export const Card = ({
    title,
    children,
}: {
    title: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-3 my-3">
            <h2 className="mb-3">{title}</h2>
            {children}
        </div>
    );
};
