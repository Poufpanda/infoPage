const terminal = document.getElementById('terminal');
const history = document.getElementById('term-history');
const input = document.getElementById('term-input');

const commands = {
    help: "Available commands: help, whoami, skills, clear",
    whoami: "Alexandre VITTOZ (Poufpanda) — Étudiant L3 Informatique | Objectif Master Cyber",
    skills: "[+] Systèmes : Linux (Ubuntu/Debian), Bash\n[+] Réseau & Sécu : UFW, Fail2ban, Wazuh, Reverse Proxy\n[+] Dev : Python, Java, C, SQL, HTML/CSS/JS"
}

history.textContent = "Bienvenue sur le terminal de Poufpanda. Tape 'help' pour voir les commandes.\n";

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const rawCmd = input.value.trim();
        const cmd = rawCmd.toLowerCase();
       history.textContent += `poufpanda@homelab:~$ ${rawCmd}\n`;
     if (cmd === "clear") {
            history.textContent = "";
        } else if (cmd === "") {
        } else if (commands[cmd]) {
            history.textContent += `${commands[cmd]}\n`;
        } else {
            history.textContent += `bash: ${rawCmd}: command not found (tape 'help')\n`;
        }

        input.value = "";
        terminal.scrollTop = terminal.scrollHeight;
    }
});