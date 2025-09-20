import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const ContactForm = () => {
    type Status = { type: "success" | "error" | "loading"; message: string } | null;
    const [status, setStatus] = useState<Status>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        setStatus({ type: "loading", message: "Sending..." });

        try {
            const res = await fetch("https://formspree.io/f/xgvlgbwd", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus({ type: "success", message: "Message sent successfully!" });
                form.reset();
            } else {
                setStatus({ type: "error", message: "Oops! Something went wrong." });
            }
        } catch {
            setStatus({ type: "error", message: "Network error. Try again later." });
        }

        setTimeout(() => setStatus(null), 3000);
    };

    const boxClasses =
        status?.type === "success"
            ? "border border-green-500 bg-green-50 text-green-700"
            : status?.type === "error"
                ? "border border-red-500 bg-red-50 text-red-700"
                : "border border-border bg-card text-muted-foreground";

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {status && (
                <div className={`mt-4 rounded-lg p-4 text-center ${boxClasses}`} aria-live="polite">
                    <p className="text-sm font-medium">{status.message}</p>
                </div>
            )}
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                    placeholder="your.email@example.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary smooth-transition"
                    placeholder="Tell me about your project..."
                ></textarea>
            </div>

            <Button type="submit" variant="contact" size="lg" className="w-full">
                <MessageSquare size={20} />
                Send Message
            </Button>
        </form>
    );
};

export default ContactForm;
