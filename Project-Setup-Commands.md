# State Management in Frontend

## Zustand

```bash
cd frontend
npm install zustand
```

## Regular React States V.S. Zustand State Management  


### React States
```javascript
/* React States */

// const [inputs, setInputs] = useState(init_value: Boolean || Object || Array || ...);
const [selectedConversation, setSelectedConversation] = useState(...);
const [messages, setMessages] = useState(...);

```

### Zustand States
```javascript
/* Zustand States */

import { create } from "zustand";

// const useConversation = create((set) => ({<OUR_GLOBAL_STATE>})); 
const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
  messages:[],
  setMessages: (messages) => set({messages}),
}));

export default useConversation;
```
