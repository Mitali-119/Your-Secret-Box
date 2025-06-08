export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg p-8 text-gray-900">
        <h1 className="text-4xl font-bold mb-6 text-center">About This Website</h1>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Your Secret Box</strong> is a platform designed to help you receive anonymous feedback 
          from real people — friends, colleagues, or even strangers. Just share your unique profile link 
          and let others send you honest thoughts.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          No sign-up is required for others to send feedback. This keeps the process effortless and open.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          You can access all your received messages on the <strong>Dashboard</strong>. Moderate, delete, or review 
          feedback at your convenience. All messages remain private and securely stored.
        </p>
        <p className="text-lg leading-relaxed">
          Whether you're a creator, student, or professional — <strong>Your Secret Box</strong> helps you grow through 
          anonymous, honest input.
        </p>
      </div>
    </main>
  );
}
