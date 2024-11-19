/*
 * Copyright 2024 OmniOne.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.omnione.did.base.response;


import org.omnione.did.base.exception.ErrorCode;

/**
 * Error Response
 */
public class ErrorResponse {
    private final String code;
    private final String description;

    /**
     * Constructor
     *
     * @param code        Error Code
     * @param description Error Description
     */
    public ErrorResponse(String code, String description) {
        this.code = code;
        this.description = description;
    }

    /**
     * Constructor
     *
     * @param errorCode Error Code
     */
    public ErrorResponse(ErrorCode errorCode) {
        this.code = errorCode.getCode();
        this.description = errorCode.getMessage();
    }

    public String getCode() {
        return code;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return String.format("ErrorResponse{code='%s', description='%s'}", code, description);
    }
}
