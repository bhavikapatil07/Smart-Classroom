document.addEventListener('DOMContentLoaded', function () {
 const userMenuButton = document.getElementById('userMenuButton');
 const userMenuDropdown = document.getElementById('userMenuDropdown');
 const sidebar = document.getElementById('sidebar');
 const sidebarToggle = document.getElementById('sidebarToggle');
 const teacherContacts = document.querySelectorAll('.teacher-contact');
 const chatHeaderName = document.getElementById('chat-header-name');
 const messageInput = document.getElementById('message-input');
 const sendButton = document.getElementById('send-button');
 const messageContainer = document.getElementById('message-container');
 // --- User Menu Dropdown ---
 userMenuButton.addEventListener('click', () => {
 userMenuDropdown.classList.toggle('hidden');
 });
 // Close dropdown if clicked outside
 document.addEventListener('click', (event) => {
 if (!userMenuButton.contains(event.target) && 
!userMenuDropdown.contains(event.target)) {
 userMenuDropdown.classList.add('hidden');
 }
 });
 // --- Mobile Sidebar Toggle ---
 sidebarToggle.addEventListener('click', () => {
 sidebar.classList.toggle('-translate-x-full');
 });
 // --- Switch Active Teacher Chat ---
 teacherContacts.forEach(contact => {
 contact.addEventListener('click', (e) => {
 e.preventDefault();
 teacherContacts.forEach(c => c.classList.remove('bg-[#4A7FA7]'));
 contact.classList.add('bg-[#4A7FA7]');
 const teacherName = contact.dataset.teacher;
 chatHeaderName.textContent = teacherName;
 messageContainer.innerHTML = `
 <div class="flex items-center justify-center h-full text-[#4A7FA7]">
 <p>This is the beginning of your conversation with ${teacherName}.</p>
 </div>
 `;
 if (window.innerWidth < 768) {
 sidebar.classList.add('-translate-x-full');
 }
 });
 });
 // --- Send Message ---
 const sendMessage = () => {
 const messageText = messageInput.value.trim();
 if (messageText === '') return;
 const messageElement = document.createElement('div');
 messageElement.className = 'flex justify-end mb-4';
 messageElement.innerHTML = `
 <div class="px-4 py-2 text-right text-white bg-[#4A7FA7] rounded-lg max-w-xs 
lg:max-w-md">
 <p class="text-sm">${messageText}</p>
 </div>
 <div class="flex-shrink-0 ml-3">
 <img class="object-cover w-8 h-8 rounded-full" 
src="https://placehold.co/100x100/4A7FA7/F6FAFD?text=U" alt="Your avatar">
 </div>
 `;
 messageContainer.appendChild(messageElement);
 messageInput.value = '';
 messageContainer.scrollTop = messageContainer.scrollHeight;
 };
 sendButton.addEventListener('click', sendMessage);
 messageInput.addEventListener('keydown', (e) => {
 if (e.key === 'Enter') {
 sendMessage();
 }
 });
});