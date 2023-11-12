# dashboard.py

import streamlit as st
from apps import chatbot_app, main_dashboard

def main():
    st.set_page_config(page_title="Dashboard", layout="wide")

    # Add a sidebar for navigation
    page = st.sidebar.selectbox("Select Page", ["Dashboard", "Chatbot"])

    # Render the selected page
    if page == "Dashboard":
        main_dashboard.show_dashboard()
    elif page == "Chatbot":
        chatbot_app.show_chatbot()

if __name__ == '__main__':
    main()
