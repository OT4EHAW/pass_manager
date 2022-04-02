function decryptAndCopyPassword(MPW, encrypted_password) {
    let decrypted_password = gostdecrypt(encrypted_password, MPW);
    navigator.clipboard.writeText(decrypted_password); 
}