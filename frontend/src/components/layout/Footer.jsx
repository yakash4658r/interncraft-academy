export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">InternCraft Academy</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            A premium internship platform designed to help students build real skills
            with live learning, projects, and professional guidance.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/checkout">Checkout</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Support</h4>
          <p className="mt-3 text-sm text-slate-600">
            For program-related queries, students can connect through WhatsApp support and official communication channels.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} InternCraft Academy. All rights reserved.
      </div>
    </footer>
  );
}