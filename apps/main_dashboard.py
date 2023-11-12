# dashboard.py

import streamlit as st

def show_dashboard():
    # st.set_page_config(page_title="Dashboard")
    # st.title("Your Dashboard")

    # Embed HTML content
    with open("dashboard.html", "r") as f:
        html_content = f.read()

    st.components.v1.html(html_content, height=1000)

# if __name__ == '__main__':
#     main()