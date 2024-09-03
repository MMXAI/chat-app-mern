<!--------------------------------------------------------------------------->
<!-- Setting MermaidJS Canvas Style -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
  .mermaid {
    background-color: #CDC2A5; /* Mermaid container background */
    border: 5px solid #27005D; /* Border style */
    padding: 15px; /* Padding */
    border-radius: 25px; /* Rounded corners */
  }
  .subgraphTitleMargin {
    top: 10,
    bottom, 20
  }
</style>
<!--------------------------------------------------------------------------->
<!--------------------------------------------------------------------------->

# Frontend Architecture

## React Pages & Components

```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'fontFamily': 'Architects Daughter,Vazir',
      'fontSize': '24px',
      'primaryColor': '#D6DAC8',
      'primaryTextColor': 'black',
      'primaryBorderColor': '#603F26',
      'secondaryColor': '#F7DED0',
      'tertiaryColor': '#CDC2A5',
      'tertiaryTextColor':'black',
      'tertiaryBorderColor':'black'
    },
    'flowchart':{
      'nodeSpacing': 30,
      'rankSpacing': 50,
      'subGraphTitleMargin': {'top': 0, 'bottom': 16}
    }
  }
}%%

flowchart TD

%% Link Styles
linkStyle default stroke:#579BB1,stroke-width:6px
%% End Link Styles

subgraph HomePage[Home Page]
Home
end

subgraph SignupPage[Signup Page]
SignUp
end

subgraph LoginPage[Login Page]
Login
end

subgraph ChatBox[Chat Box]
Messages
MessageInput
end

main --> App
App --> HomePage & SignupPage & LoginPage

HomePage --> Sidebar & MessageContainer
Sidebar --> SearchInput & Conversations & LogoutButton
Conversations --> Conversation[Conversation 1,2,3,...]
MessageContainer -- If no chat --> NoChatSelected
MessageContainer -- If chat ---> ChatBox
Messages --> Message[Message 1,2,3,...]

SignUp --> GenderCheckbox


%% subgraph A [
%% گروه ۱
%% ]
%% %% This is another comment
%% App("This is Emoji ❤️") --> Home --> Sidebar("fa:fa-car-battery ")
%% Home["`This is **markdown**`"] & App --> Message
%% end
%% %% subgraph A

%% subgraph Two
%% subgraph 3
%% Hello --ارتباط دوگانه----> Goodbye("مرغ char:#9829;")
%% end
%% %% subgraph 3
%% FF --"Link Text (✌️)"--> 88 --Longer Link----> App & 33
%% Goodbye & Hello --> 88{"A double quote:#quot;"}
%% end
%% %% subgraph Two

%% subgraph XP [Setting Direction]
%% direction LR
%% EE & HH & PQ;
%% Next("<img src='./frontend/public/bg.png' width='300' />")
%% EE --> PQ
%% end
%% %% subgraph XP

%% No1
%% No2
%% No2 ~~~ Message
%% No1 --> No2 --> No2

%% A --> Two

```
