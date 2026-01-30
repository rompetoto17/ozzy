import streamlit as st
import numpy as np

st.title("Matrix Inverse Calculator")

n = st.number_input("Enter matrix size (n)", min_value=1, step=1)

matrix = []
st.write("Enter matrix values (one row per line):")

for i in range(int(n)):
    row = st.text_input(f"Row {i+1} (space separated)")
    if row:
        matrix.append(list(map(float, row.split())))

if st.button("Compute Inverse"):
    try:
        A = np.array(matrix)
        inv = np.linalg.inv(A)
        st.success("Inverse Matrix:")
        st.write(inv)
    except:
        st.error("Matrix is not invertible or input is invalid.")
