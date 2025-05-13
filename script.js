const adviceIdContainer = document.getElementById('advice-id')
const adviceContainer = document.getElementById('advice')

function updateContent(id, advice) {
    adviceIdContainer.textContent = id;
    adviceContainer.textContent = advice
}

async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice", {
        method: 'GET'
    })
    const data = await res.json()
    const { slip } = data
    const { id, advice } = slip
    updateContent(id, advice)
}

getAdvice()
