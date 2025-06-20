export const ErrorBox = ({ message }: { message: string }) => (
    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
        {message}
    </div>
);
