import { useState } from 'react'
import ProductCard from './ProductCard'

const categories = [
  { id: 'skincare', label: 'Skincare' },
  { id: 'makeup', label: 'Makeup' },
  { id: 'hair', label: 'Hair' },
]

const sampleProducts: Record<string, Array<any>> = {
  skincare: [
    { id: 's1', name: 'Hydrating Serum', desc: 'Lightweight, for daily use', tags: ['hydration'] },
    { id: 's2', name: 'Vitamin C Glow', desc: 'Brightens and evens tone', tags: ['brightening'] },
  ],
  makeup: [
    { id: 'm1', name: 'Dewy Foundation', desc: 'Buildable, luminous finish', tags: ['dewy'] },
    { id: 'm2', name: 'Longwear Mascara', desc: 'Volumizing and lengthening', tags: ['longwear'] },
  ],
  hair: [
    { id: 'h1', name: 'Smoothing Shampoo', desc: 'For frizz control', tags: ['smoothing'] },
    { id: 'h2', name: 'Repair Mask', desc: 'Deep conditioning', tags: ['repair'] },
  ],
}

export default function QuestionFlow() {
  const [step, setStep] = useState(0)
  const [category, setCategory] = useState<string | null>(null)
  const [answers, setAnswers] = useState<Record<string, any>>({})

  function chooseCategory(cat: string) {
    setCategory(cat)
    setStep(1)
  }

  function answerQuestion(key: string, value: any) {
    setAnswers(prev => ({ ...prev, [key]: value }))
    setStep(2)
  }

  function restart() {
    setStep(0)
    setCategory(null)
    setAnswers({})
  }

  return (
    <div className="qflow">
      {step === 0 && (
        <div>
          <h2>Choose a category</h2>
          <div className="cards">
            {categories.map(c => (
              <button key={c.id} className="cat" onClick={() => chooseCategory(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && category && (
        <div>
          <h2>Quick question</h2>
          <p>What's your main concern?</p>
          <div className="options">
            <button onClick={() => answerQuestion('concern', 'hydration')}>Hydration</button>
            <button onClick={() => answerQuestion('concern', 'brightening')}>Brightening</button>
            <button onClick={() => answerQuestion('concern', 'repair')}>Repair</button>
          </div>
          <button className="back" onClick={() => setStep(0)}>Back</button>
        </div>
      )}

      {step === 2 && category && (
        <div>
          <h2>Recommended for you</h2>
          <div className="product-grid">
            {(sampleProducts[category] || []).filter(p => {
              const c = answers.concern
              return !c || p.tags.includes(c)
            }).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="actions">
            <button onClick={restart}>Start over</button>
            <button className="back" onClick={() => setStep(1)}>Change answer</button>
          </div>
        </div>
      )}
    </div>
  )
}
