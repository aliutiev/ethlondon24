import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: "How can I be sure Gnosis Pay's insights are top-notch?",
      answer:
        "Our success is tied to yours! If our insights were any sharper, they'd be cutting diamonds. Our users are living their best financial lives, and that's no coincidence!",
    },
    {
      question: "Is using Gnosis Pay kind of like having insider knowledge?",
      answer:
        "Think of it as having a financial crystal ball, but cooler and completely legal. With Gnosis Pay, you're not just in the loop; you're creating it!",
    },
    {
      question: "So, is this insider trading or what?",
      answer:
        "Absolutely not! We're all about transparency and legal fun. Think of us as your guide to the treasure, but you're the one with the map.",
    },
  ],
  [
    {
      question: "Do the tipsters know what they're doing?",
      answer:
        "Our community is savvy! They know the drill and they're here to share the wealth, not insider secrets. It's like a potluck, but everyone brings gold nuggets.",
    },
    {
      question: "Where is Gnosis Pay based?",
      answer:
        "If we told you, we'd have to... just kidding! Let's just say we're conveniently located in the cloud, accessible everywhere, avoiding the SEC's curious eyes.",
    },
    {
      question: "Any age restrictions for using Gnosis Pay?",
      answer:
        "As long as you're old enough to know the difference between Bitcoin and Bitmoji, you're good in our book. But seriously, follow your local laws, even if your dog is a financial genius.",
    },
  ],
  [
    {
      question: "How did Gnosis Pay get approved?",
      answer:
        "Even the strictest app reviewers couldn't resist our charm (and robust security features). Plus, who can say no to a bit of financial magic?",
    },
    {
      question: "What do I tell the IRS about my Gnosis Pay gains?",
      answer:
        "Tell them it's all skill, baby! Just kidding, pay your taxes. Gnosis Pay is about making money smarter, not hiding it under your mattress.",
    },
    {
      question: "How can I become a Gnosis insider?",
      answer:
        "Got a knack for spotting trends? Slide into our DMs with your creds, and we might just send you our secret handshake. Insider status: unlocked!",
    },
  ],
]


export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="https://gnosispay.com/"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
