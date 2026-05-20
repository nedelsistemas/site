export default function Help() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-5xl">
      <h1 className="text-2xl font-bold mb-4">Help</h1>
      <p className="mb-2">
        If you need help, please contact our support team at{" "}
        <a
          href="mailto:support@nedel.com"
          className="text-nedel-blue hover:underline"
        >
          support@nedel.com
        </a>
      </p>
    </div>
  );
}
